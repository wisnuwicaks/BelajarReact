import React from 'react'

const ProductCard =(props)=>{////
    //disctructuring
    const {productData} = props
    const {nama, harga, desc,disc,stok} = productData
    const renderingItems =()=>{
        if(stok){
            return <>
            <h1>ProductCard</h1>
            <h3>Nama Produk : {nama}</h3>
            <h3>Harga : {harga}</h3>
            {
            disc>0?<h3>Harga Diskon : {harga*((100-disc)/100)}</h3>:null
            }
            <h3>Deskripsi : {desc}</h3>
            </>
        }
        else{
            return <h3>Item Kosong </h3>
        }
    }
    return (
        <div
            style={{
                border:"1px solid black",
                width:"240px",
                borderRadius:"7px",
                padding :"10px"
            }}
        >
            {renderingItems()}
        </div>
    )
}

export default ProductCard