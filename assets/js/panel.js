$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4,
    infinite: false,
    rtl: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          variableWidth: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
        },
      },
    ],
  });
});

// vars
const editUsers = document.querySelectorAll(".editUser");
const deleteUsers = document.querySelectorAll(".deleteUser");

const editFactories = document.querySelectorAll(".factoryEdit");
const deleteFactories = document.querySelectorAll(".deleteFactory");

const deleteProds = document.querySelectorAll(".deleteProd");

// funcs
const onEditUserClick = () => {
  Swal.fire({
    customClass: "editModal",
    html: `
    <label class="custom-input">
    <span>نام کاربر</span>
    <input type="text" id="userName" placeholder="نام کاربر را وارد کنید">
    </label>
    <label class="custom-input mt-4">
    <span>شماره تماس کاربر</span>
    <input type="text" id="phone" placeholder="شماره تماس کاربر را وارد کنید">
    </label>
    `,
    preConfirm: () => {
      const userName = Swal.getPopup().querySelector("#userName").value;
      const phone = Swal.getPopup().querySelector("#phone").value;
      // if (!login || !password) {
      //   Swal.showValidationMessage(`Please enter login and password`);
      // }
      return { login: login, password: password };
    },

    showCancelButton: true,
    confirmButtonText: "ثبت کاربر",
    cancelButtonText: "انصراف دادن",
  });
};
const onDeleteUserClick = () => {
  Swal.fire({
    html: "آیا قصد دارید کاربر <span class='text--orange'>علی رحیمی</span> را از لیست کاربران حذف کنید؟",
    // input: "text",
    // inputAttributes: {
    //   autocapitalize: "off",
    // },
    showCancelButton: true,
    confirmButtonText: "<span class='text--red'>بله حذف کن</span>",
    cancelButtonText: "خیر",
  });
};

const onDeleteFactoryClick = () => {
  Swal.fire({
    html: "آیا قصد دارید <span class='text--orange'>انبار شاهرودی</span> را از لیست کارخانه‌ها حذف کنید؟",
    // input: "text",
    // inputAttributes: {
    //   autocapitalize: "off",
    // },
    showCancelButton: true,
    confirmButtonText: "<span class='text--red'>بله حذف کن</span>",
    cancelButtonText: "خیر",
  });
};
const onEditFactoryClick = () => {
  Swal.fire({
    customClass: "editModal",
    html: `
    <label class="custom-input">
    <span>نام کارخانه</span>
    <input type="text" id="userName" placeholder="نام کارخانه را وارد کنید">
    </label>
    <div class="flex align-items-center">
    <label class="containerRadio">
    
  <input type="radio" checked="checked" name="radio">
  <span>
    زیرمجموعه
    </span>
  <span class="checkmark"></span></label>
    <label class="containerRadio">
    <input type="radio" checked="checked" name="radio">
    <span>
    مستقل
    </span>
  <span class="checkmark"></span>
  </div>
</label>
    `,
    preConfirm: () => {
      const userName = Swal.getPopup().querySelector("#userName").value;
      const phone = Swal.getPopup().querySelector("#phone").value;
      // if (!login || !password) {
      //   Swal.showValidationMessage(`Please enter login and password`);
      // }
      return { login: login, password: password };
    },

    showCancelButton: true,
    confirmButtonText: "ثبت کاربر",
    cancelButtonText: "انصراف دادن",
  });
};

const onDeleteProdClick = () => {
  Swal.fire({
    html: "آیا قصد دارید محصول <span class='text--orange'>میلگرد ۲۰</span> را از لیست محصولات حذف کنید؟",
    // input: "text",
    // inputAttributes: {
    //   autocapitalize: "off",
    // },
    showCancelButton: true,
    confirmButtonText: "<span class='text--red'>بله حذف کن</span>",
    cancelButtonText: "خیر",
  });
};

// events
editUsers.forEach((item) => item.addEventListener("click", onEditUserClick));
deleteUsers.forEach((item) =>
  item.addEventListener("click", onDeleteUserClick)
);

deleteFactories.forEach((item) =>
  item.addEventListener("click", onDeleteFactoryClick)
);
editFactories.forEach((item) =>
  item.addEventListener("click", onEditFactoryClick)
);

deleteProds.forEach((item) =>
  item.addEventListener("click", onDeleteProdClick)
);
