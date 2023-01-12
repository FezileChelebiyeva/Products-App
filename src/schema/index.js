import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("pleace write product name"),
  price: yup.number().required("pleace write product price"),
  description: yup
    .string()
    .required("pleace write product description")
    .min(40, "should be min 40 character"),
  imgUrl: yup
    .string()
    .required("pleace write product image url")
    .url("should be url"),
});
