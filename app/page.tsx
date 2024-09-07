import Header from "./_Components/Header";
import Upcoming from "./_Components/Upcoming";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-24 p-8 pt-24">
      <Header />

      <div className="w-full flex flex-col items-center gap-8">
        <h1 className="text-3xl">فروشگاه وودین</h1>
        <p className="text-justify justify-center max-w-80 md:max-w-96 lg:max-w-lg text-lg">
          در فروشگاه وودین شیک ترین و مدرن ترین دکوراسیون خانگی و اداری رو
          براتون فراهم کردیم. در فروشگاه وودین شیک ترین و مدرن ترین دکوراسیون
          خانگی و اداری رو براتون فراهم کردیم.
        </p>
      </div>

      <Upcoming />
    </div>
  );
}
