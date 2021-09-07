import "./HomeView.css";
import { Counter } from "../../components/counter/Counter";
import { Calculator } from "../../components/calculator/Calculator";

export const HomeView = () => {
  return (
    <section>
      <h1>This is the HomeView</h1>
      <Counter />
      <Calculator />
    </section>
  );
};
