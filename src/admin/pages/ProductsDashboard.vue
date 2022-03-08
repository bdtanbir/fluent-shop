<template>
  <div class="fs-dashboard-wrapper fs-shop-box">
    <span class="fs-shop-section-heading">Dashboard</span>

    <div class="fs-dashboard-container">
      <div class="fs-product-toolbar d-flex align-center justify-between">
        <form @submit.prevent="searchProduct" class="fs-product-search-bar d-flex align-center">
          <input type="search" name="search" placeholder="Search Product">
          <button class="fs-product-search-btn" type="button" @click="searchProduct"><span class="fs-search-icon"></span></button>
        </form>

        <div class="fs-product-create-box">
          <router-link to="/create-new-product" class="fs-product-create-btn">Create New Product</router-link>
        </div>
      </div>
      <table class="fs-product-table">
        <thead>
          <tr>
            <td>ID</td>
            <th class="text-left">Thumbnail</th>
            <th class="text-left">Title</th>
            <th class="text-center">Price</th>
            <th class="text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th class="text-left">
              <span>01</span>
            </th>
            <td class="fs-product-thumbnail">
              <img src="https://img.freepik.com/free-psd/vertical-business-card-mockup_439185-4353.jpg?w=200" alt="Product">
            </td>
            <td class="fs-product-title">
              <span class="fs-product-author"><span class="fs-user-icon"></span> author</span>
              <h3>First Product</h3>
            </td>
            <td class="fs-product-price">
              <span class="text-center">29 ৳</span>
            </td>
            <td class="fs-product-actions">
              <div class="fs-product-buttons d-flex items-center justify-end text-right">
                <a href="#" class="fs-product-action-btn fs-product-edit">Edit</a>
                <a href="#" class="fs-product-action-btn fs-product-duplicate">Duplicate</a>
                <a href="#" class="fs-product-action-btn fs-product-delete">Delete</a>
              </div>
            </td>
          </tr>
          <tr>
            <th class="text-left">
              <span>02</span>
            </th>
            <td class="fs-product-thumbnail">
              <img src="https://img.freepik.com/free-psd/vertical-business-card-mockup_439185-4353.jpg?w=200" alt="Product">
            </td>
            <td class="fs-product-title">
              <span class="fs-product-author"><span class="fs-user-icon"></span> author</span>
              <h3>Second Product</h3>
            </td>
            <td class="fs-product-price">
              <span class="text-center">29 ৳</span>
            </td>
            <td class="fs-product-actions">
              <div class="fs-product-buttons d-flex items-center justify-end text-right">
                <a href="#" class="fs-product-action-btn fs-product-edit">Edit</a>
                <a href="#" class="fs-product-action-btn fs-product-duplicate">Duplicate</a>
                <a href="#" class="fs-product-action-btn fs-product-delete">Delete</a>
              </div>
            </td>
          </tr>
          <tr>
            <th class="text-left">
              <span>03</span>
            </th>
            <td class="fs-product-thumbnail">
              <img src="https://img.freepik.com/free-psd/vertical-business-card-mockup_439185-4353.jpg?w=200" alt="Product">
            </td>
            <td class="fs-product-title">
              <span class="fs-product-author"><span class="fs-user-icon"></span> author</span>
              <h3>Second Product</h3>
            </td>
            <td class="fs-product-price">
              <span class="text-center">29 ৳</span>
            </td>
            <td class="fs-product-actions">
              <div class="fs-product-buttons d-flex items-center justify-end text-right">
                <a href="#" class="fs-product-action-btn fs-product-edit">Edit</a>
                <a href="#" class="fs-product-action-btn fs-product-duplicate">Duplicate</a>
                <a href="#" class="fs-product-action-btn fs-product-delete">Delete</a>
              </div>
            </td>
          </tr>
        </tbody>

      </table>
      <div class="fs-product-pagination">
        <ul class="d-flex items-center justify-end">
          <li><a href="#"> << </a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#"> >> </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsDashboard",
  data() {
    return {

    }
  },
  methods: {
    searchProduct(e) {
      e.preventDefault();
    }
  }
}
</script>

<style>
  .fs-product-table {
    width: 100%;
    border-spacing: 0;
  }
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .fs-product-table thead {
    background: #ebecee;
  }
  .fs-product-table thead th,
  .fs-product-table thead td {
    font-weight: 700;
    padding: 10px 12px;
  }
  .fs-product-table tbody th {
    border-left: 1px solid #eee;
  }
  .fs-product-table tbody th,
  .fs-product-table tbody td {
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 12px;
  }
  .fs-product-table .fs-product-thumbnail img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
  }
  .fs-product-table .fs-product-title h3 {
    margin: 4px 0 0 0;
    font-size: 16px;
  }
  .fs-product-table .fs-product-title .fs-product-author {
    color: #aaa;
    display: inline-flex;
    align-items: center;
  }
  .fs-product-table .fs-product-title .fs-product-author .fs-user-icon {
    margin-right: 5px;
  }
  .fs-product-table .fs-product-price span {
    display: block;
    font-size: 16px;
    font-weight: 500;
  }
  .fs-user-icon {
    position: relative;
    display: inline-block;
    width: 12px;
    height: 12px;
    overflow: hidden;
  }
  .fs-user-icon:before {
    content: '';
    width: 90%;
    height: 90%;
    position: absolute;
    bottom: -70%;
    border-radius: 50px;
    border-left: 1px solid #aaa;
    border-top: 1px solid #aaa;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transform: rotate(45deg);
  }
  .fs-user-icon:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    background: #cdcdcd;
    border-radius: 50%;
    left: 50%;
    margin-left: -25%;
    top: 0;
  }
  .fs-product-toolbar {
    margin-bottom: 15px;
  }
  .fs-product-search-bar {
    position: relative;
  }
  .fs-product-search-bar input {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 3px 10px;
    margin: 0;
    width: 250px;
    box-sizing: border-box;
  }
  .fs-product-search-bar input:focus {
    outline: none;
    box-shadow: none;
    border-color: #555;
  }
  .fs-product-search-bar .fs-product-search-btn {
    background: #409EFF;
    border: none;
    margin-left: 4px;
    border-radius: 4px;
    height: 36px;
    width: 40px;
    padding-top: 5px;
    cursor: pointer;
    transition: .3s;
    -webkit-transition: .3s;
    -ms-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
  }
  .fs-product-create-btn {
    display: inline-block;
    background: #409EFF;
    padding: 10px 16px;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    transition: .3s;
    -webkit-transition: .3s;
    -ms-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
  }
  .fs-product-search-bar .fs-product-search-btn:hover,
  .fs-product-create-btn:hover {
    color: #fff;
  }
  .fs-product-buttons .fs-product-action-btn {
    display: inline-block;
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 4px;
    background: #909399;
    margin-left: 5px;
    color: #ffffff;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
    -o-transition: .2s;
    font-size: 12px;
  }
  .fs-product-buttons .fs-product-action-btn:hover {
    background: #abadb2;
  }
  .fs-product-buttons .fs-product-action-btn.fs-product-delete {
    background: #F56C6C;
  }
  .fs-product-buttons .fs-product-action-btn.fs-product-delete:hover {
    background: #f78585;
  }
  .fs-product-buttons .fs-product-action-btn.fs-product-edit {
    background: #409EFF;
  }
  .fs-product-search-bar .fs-product-search-btn:hover,
  .fs-product-create-btn:hover,
  .fs-product-buttons .fs-product-action-btn.fs-product-edit:hover {
    background: #70b5fd;
  }
</style>
