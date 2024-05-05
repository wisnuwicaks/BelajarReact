@model List<UserViewModel>

@{
    ViewBag.Title = "User Status";
}

<table class="table">
    <thead>
        <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        @foreach (var user in Model)
        {
            <tr>
                <td>@user.UserId</td>
                <td>@user.Name</td>
                <td>
                    <input type="checkbox" class="status-checkbox" data-userid="@user.UserId" @(user.Status ? "checked" : "") />
                </td>
            </tr>
        }
    </tbody>
</table>
<button id="submitBtn">Submit</button>

@section scripts {
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#submitBtn').click(function () {
                var data = [];
                $('.status-checkbox').each(function () {
                    data.push({
                        userId: $(this).data('userid'),
                        status: $(this).is(':checked') ? 'Activated' : 'Inactive'
                    });
                });
                
                $.ajax({
                    type: "POST",
                    url: "@Url.Action("UpdateStatus", "Activate")",
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    success: function (response) {
                        alert("Status updated successfully!");
                    },
                    error: function () {
                        alert("Error updating status.");
                    }
                });
            });
        });
    </script>
}


using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

public class ActivateController : Controller
{
    private List<UserViewModel> _users = new List<UserViewModel>
    {
        new UserViewModel { UserId = 1, Name = "User 1", Status = false },
        new UserViewModel { UserId = 2, Name = "User 2", Status = false },
        new UserViewModel { UserId = 3, Name = "User 3", Status = false }
    };

    public ActionResult Index()
    {
        return View(_users);
    }

    [HttpPost]
    public JsonResult UpdateStatus(List<UserViewModel> users)
    {
        foreach (var user in users)
        {
            var existingUser = _users.FirstOrDefault(u => u.UserId == user.UserId);
            if (existingUser != null)
            {
                existingUser.Status = user.Status;
                // Update status in database here
            }
        }
        return Json(new { success = true });
    }
}
