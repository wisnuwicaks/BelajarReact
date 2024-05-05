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

@model List<UserViewModel>

@{
    ViewBag.Title = "User Activation";
}

<h2>User Activation</h2>

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
                <td><input type="checkbox" class="user-checkbox" data-user-id="@user.UserId" @(user.IsActive ? "checked" : "") /></td>
            </tr>
        }
    </tbody>
</table>

<button id="btnSubmit" class="btn btn-primary">Submit</button>

@section scripts {
    <script>
        $(document).ready(function () {
            var initialStates = {};

            $('.user-checkbox').each(function () {
                var userId = $(this).data('user-id');
                initialStates[userId] = $(this).prop('checked');
            });

            $('.user-checkbox').change(function () {
                var userId = $(this).data('user-id');
                var isActive = $(this).prop('checked');
                if (isActive !== initialStates[userId]) {
                    $(this).data('changed', true);
                } else {
                    $(this).removeData('changed');
                }
            });

            $('#btnSubmit').click(function () {
                var data = [];
                $('.user-checkbox').each(function () {
                    if ($(this).data('changed')) {
                        var userId = $(this).data('user-id');
                        var isActive = $(this).prop('checked');
                        data.push({ UserId: userId, IsActive: isActive });
                    }
                });
                if (data.length > 0) {
                    $.ajax({
                        url: '@Url.Action("UpdateStatus", "Activate")',
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify(data),
                        success: function (result) {
                            alert('Status updated successfully.');
                        },
                        error: function (xhr, status, error) {
                            alert('Error occurred while updating status.');
                        }
                    });
                }
            });
        });
    </script>
}

