import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductBlockSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton
        sx={{ bgcolor: "grey.700" }}
        variant="rounded"
        width={285}
        height={210}
      />
      <Skeleton
        sx={{ bgcolor: "grey.700" }}
        variant="rounded"
        width={285}
        height={25}
      />
      <Skeleton
        sx={{ bgcolor: "grey.700" }}
        variant="rounded"
        width={285}
        height={15}
      />
      <Skeleton
        sx={{ bgcolor: "grey.700" }}
        variant="rounded"
        width={200}
        height={30}
        style={{ margin: "10px auto", borderRadius: "15px" }}
      />
    </Stack>
  );
};

export default ProductBlockSkeleton;
