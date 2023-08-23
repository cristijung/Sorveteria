import styles from "./Sale.module.scss";
import SaleItem from "../../components/SaleItem/SaleItem";
import { productsApi } from "../../services/ProductsService";
import SkeletonSale from "../../components/UI/SkeletonSale";
import NotFound from "../NotFound/NotFound";
import { FC } from "react";
import { Container } from "@mui/material";

const Sale: FC = () => {
  const { data, isLoading, error } = productsApi.useFetchSaleQuery("");
  return (
    <Container maxWidth='lg'>
    <div className={styles.sale}>
      {isLoading ? (
        [...new Array(4)].map((_, i) => <SkeletonSale key={i} />)
      ) : error ? (
        <div className={styles.error}>
          <NotFound />
        </div>
      ) : (
        data?.map((i, idx) => <SaleItem image={i.image} key={idx} />)
      )}
    </div>
    </Container>
  );
};

export default Sale;
