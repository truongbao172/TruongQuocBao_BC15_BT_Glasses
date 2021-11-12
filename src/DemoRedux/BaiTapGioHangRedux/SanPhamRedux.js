import React, { Component } from "react";

export default class SanPhamRedux extends Component {
  render() {
    let sanPham = this.props.sanPham;
    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="..." height={350} />
        <div className="card-body bg-dark text-white">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>

          <button className="btn btn-danger ml-2">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
