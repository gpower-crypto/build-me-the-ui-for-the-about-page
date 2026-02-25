import HeaderTopBar from "../components/HeaderTopBar";
import HeaderMainNavigation from "../components/HeaderMainNavigation";
import HeaderBottomNavigation from "../components/HeaderBottomNavigation";

export default function Header() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeaderTopBar />
      <HeaderMainNavigation />
      <HeaderBottomNavigation />
    </div>
  );
}
