export interface productdetail{
  productId:number;
  productCompany:string;
  price:number;
  stockValue:number;
  frontPreviewUrl:string;
  backPreviewUrl:string;
}

export const dataProducts : productdetail[]= [
  {
    productId:1,
    productCompany:"Nike",
    price:900,
    stockValue:120,
    frontPreviewUrl:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-0ba21e58-70b2-4c42-9ad0-794860febecb/korea-older-short-sleeve-football-top-qmDmVq.jpg",
    backPreviewUrl:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-5cd17686-b607-4315-a642-e95de52ce767/korea-older-short-sleeve-football-top-qmDmVq.jpg",
  },
  {
    productId:2,
    productCompany:"Puma",
    price:1000,
    stockValue:80,
    frontPreviewUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/596465/51/fnd/PNA/fmt/png/Tailored-for-Sport-Men's-Tee",
    backPreviewUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/596465/51/bv/fnd/PNA/fmt/png/Tailored-for-Sport-Men's-Tee",
  },
  {
    productId:3,
    productCompany:"Puma",
    price:1200,
    stockValue:130,
    frontPreviewUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/597166/02/fnd/PNA/fmt/png/PUMA-Club-Men's-Tee",
    backPreviewUrl:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/597166/02/bv/fnd/PNA/fmt/png/PUMA-Club-Men's-Tee",
  },
  {
    productId:4,
    productCompany:"HRX",
    price:1000,
    stockValue:102,
    frontPreviewUrl:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10568664/2020/3/2/60b8cfb1-6c56-43d5-be73-4fcab1040b991583151829182-HRX-by-Hrithik-Roshan-Girls-Tshirts-7371583151827601-1.jpg",
    backPreviewUrl:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10568664/2020/3/2/b99f7c4c-c222-4192-9357-e59afc3302a21583151829125-HRX-by-Hrithik-Roshan-Girls-Tshirts-7371583151827601-2.jpg",
  },

];
