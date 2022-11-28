import PageNotFound from "../Components/ErrorPage/404Page";
export default function Error() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      id="error"
    >
      <PageNotFound />
    </div>
  );
}
