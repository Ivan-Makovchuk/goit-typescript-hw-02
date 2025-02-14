type Props = {
  changePage: () => void;
};

const LoadMoreBtn = ({ changePage }: Props) => {
  return <button onClick={changePage}>LoadMore</button>;
};

export default LoadMoreBtn;
