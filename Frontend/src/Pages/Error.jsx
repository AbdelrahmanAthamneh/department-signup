import Navigation from "../Components/Navigation/Navigation";

export default function ErrorPage() {
  return (<>
  <Navigation />
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>An Error Occured!</h1>
      <p>Looks like you entered a non-supported route!</p>
    </main>
    </>);
}
