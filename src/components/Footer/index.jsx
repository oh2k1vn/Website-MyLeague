export const Footer = () => {
  const col1 = `<div class="help-block small"> <p class="">Nền tảng quản lý giải đấu, đội thi đấu</p> <ul class="footer-menu"> <li> <a href="https://myleague.vn/terms-of-user" class=""> Điều khoản sử dụng </a> </li> <li> <a href="https://myleague.vn/privacy-policy" class=""> Chính sách bảo mật </a> </li> <br> <li> <a href="https://myleague.vn/payment-policy" class=""> Chính sách thanh toán </a> </li> <li> <a href="https://myleague.vn/contact-us" class=""> Liên Hệ </a> </li> <br> <li class="policyProfile"> <a href="https://myleague.vn/policy-profile" class=""> Chính sách bảo mật thông tin cá nhân </a> </li> <br> <li> <a href="https://fb.com/myleague.vn/reviews/" class=""> Nhận xét về MyLeague </a> </li> <li> <a href="https://myleague.vn/pricing" class=""> Bảng giá </a> </li> <br> <li class="wrap-social-myleague"> <ul class="social-myleague"> <li><a href="mailto:contact@myleague.vn"><i class="fa fa-envelope"></i></a></li> <li><a target="_blank" href="https://www.facebook.com/myleague.vn"><i class="fa fa-facebook-official"></i></a></li> <li><a target="_blank" href="https://instagram.com/myleague.vn"><i class="fa fa-instagram"></i></a></li> </ul> </li> </ul> </div>`;
  const col2 = `<div id="wrap-copyright" class="col-sm-4 col-sm-pull-4 text-center"> <a href="/" class="hvr-buzz-out logo "> CÔNG TY CỔ PHẦN MYLEAGUE </a> <p class="address "> <b style="font-size:16px"><i class="fa fa-credit-card"></i></b>: Tầng 8 Tòa nhà 185 phố Giảng Võ, Phường Cát Linh, Quận Đống Đa, Thành phố Hà Nội, Việt Nam </p> <p class="phone "> <b style="font-size:16px"><i class="fa fa-phone"></i></b>: 024 7307 2628 </p> <p class="email "> <b style="font-size:16px"><i class="fa fa-envelope"></i></b>: contact@myleague.vn </p> <p class="small "> © 2024 - Bản quyền thuộc về myleague.vn <br> <span>Đã đăng ký bản quyền</span> </p> </div>`;

  return (
    <div className="bg-white shadow w-full">
      <div className="container max-w-[1170px] mx-auto grid grid-cols-3 p-6 ">
        <div className="flex flex-col gap-3 text-[15px]">
          <p className="text-[#9ba4b4]">
            Nền tảng quản lý giải đấu, đội thi đấu
          </p>
          <p className="flex gap-4 text-green cursor-pointer">
            <span>Điều khoản sử dụng</span>
            <span>Chính sách bảo mật</span>
          </p>
          <p className="flex gap-4 text-green cursor-pointer">
            <span>Chính sách bảo mật</span>
            <span>Chính sách thanh toánLiên Hệ</span>
          </p>
          <p className="text-green cursor-pointer">
            Chính sách bảo mật thông tin cá nhân
          </p>
          <p className="flex gap-4 text-green cursor-pointer">
            <span>Nhận xét về MyLeague</span>
            <span>Bảng giá</span>
          </p>
        </div>
        <div className="text-center">
          <p className="text-[16px] text-green uppercase">
            CÔNG TY CỔ PHẦN MYLEAGUE
          </p>
          <p className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 6v12q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6M4 8h16V6H4zm0 4v6h16v-6zm0 6V6z"
              />
            </svg>{" "}
            : Tầng 8 Tòa nhà 185 phố Giảng Võ, Phường Cát Linh, Quận Đống Đa,
            Thành phố Hà Nội, Việt Nam
          </p>
          <p>024 7307 2628</p>
          <p>contact@myleague.vn</p>
          <p className="mt-6 mx-14">
            © 2024 - Bản quyền thuộc về myleague.vn Đã đăng ký bản quyền
          </p>
        </div>
      </div>

      <div
        className="w-full text-white text-center p-6"
        style={{
          backgroundColor: "#3bbf1a",
          backgroundImage:
            "linear-gradient(to right top, #45af2a, #3ba023, #30901c, #268215, #1b730d, #1b730d, #1b730d, #1b730d, #268215, #30901c, #3ba023, #45af2a)",
        }}
      >
        <p>- Mã số thuế: 0109226319</p>
        <p>- Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội</p>
        <p>- Ngày cấp: 16/06/2020</p>
      </div>
    </div>
  );
};
