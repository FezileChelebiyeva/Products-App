import * as yup from 'yup';

export const productSchema = yup.object().shape({
    name: yup.string().required("pleace write product name"),
    price: yup.number().required("pleace write product price"),
    description: yup.string().required("pleace write product description"),
    imgUrl: yup.string().required("pleace write product imgUrl")
});
