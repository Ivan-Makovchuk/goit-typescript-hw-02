import { TailSpin } from "react-loader-spinner";

type Props = {
  load: boolean;
};

const Loader = ({ load }: Props) => {
  return (
    <div>
      {load && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <TailSpin
            visible={true}
            // marginTop="100"
            height="80"
            width="80"
            // width="100%"
            // display="flex"
            // justifyContent="center"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </div>
  );
};

export default Loader;
