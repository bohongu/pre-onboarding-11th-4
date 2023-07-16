import Recommand from "./components/Recommand";
import Search from "./components/Search";
import Title from "./components/Title";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Title />
      <Search />
      <Recommand />
    </Layout>
  );
}

export default App;
