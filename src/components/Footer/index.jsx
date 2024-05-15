export const Footer = () => {
  const col1 = `<div class="help-block small"> <p class="">Nền tảng quản lý giải đấu, đội thi đấu</p> <ul class="footer-menu"> <li> <a href="https://myleague.vn/terms-of-user" class=""> Điều khoản sử dụng </a> </li> <li> <a href="https://myleague.vn/privacy-policy" class=""> Chính sách bảo mật </a> </li> <br> <li> <a href="https://myleague.vn/payment-policy" class=""> Chính sách thanh toán </a> </li> <li> <a href="https://myleague.vn/contact-us" class=""> Liên Hệ </a> </li> <br> <li class="policyProfile"> <a href="https://myleague.vn/policy-profile" class=""> Chính sách bảo mật thông tin cá nhân </a> </li> <br> <li> <a href="https://fb.com/myleague.vn/reviews/" class=""> Nhận xét về MyLeague </a> </li> <li> <a href="https://myleague.vn/pricing" class=""> Bảng giá </a> </li> <br> <li class="wrap-social-myleague"> <ul class="social-myleague"> <li><a href="mailto:contact@myleague.vn"><i class="fa fa-envelope"></i></a></li> <li><a target="_blank" href="https://www.facebook.com/myleague.vn"><i class="fa fa-facebook-official"></i></a></li> <li><a target="_blank" href="https://instagram.com/myleague.vn"><i class="fa fa-instagram"></i></a></li> </ul> </li> </ul> </div>`;
  const col2 = `<div id="wrap-copyright" class="col-sm-4 col-sm-pull-4 text-center"> <a href="/" class="hvr-buzz-out logo "> CÔNG TY CỔ PHẦN MYLEAGUE </a> <p class="address "> <b style="font-size:16px"><i class="fa fa-credit-card"></i></b>: Tầng 8 Tòa nhà 185 phố Giảng Võ, Phường Cát Linh, Quận Đống Đa, Thành phố Hà Nội, Việt Nam </p> <p class="phone "> <b style="font-size:16px"><i class="fa fa-phone"></i></b>: 024 7307 2628 </p> <p class="email "> <b style="font-size:16px"><i class="fa fa-envelope"></i></b>: contact@myleague.vn </p> <p class="small "> © 2024 - Bản quyền thuộc về myleague.vn <br> <span>Đã đăng ký bản quyền</span> </p> </div>`;

  return (
    <div className="bg-white shadow w-full">
      <div className="container max-w-[1170px] mx-auto grid grid-cols-3 p-6 ">
        <div dangerouslySetInnerHTML={{ __html: col1 }}></div>
        <div dangerouslySetInnerHTML={{ __html: col2 }}></div>
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
