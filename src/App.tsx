import { NavigationBar } from './components/navigation-bar';
import { SidePanel } from './components/side-panel';
import { usePreset } from './hook/use-preset';
import { Page } from './page';

function App() {
  const { preferedScreenSize, setPreferedScreenSize } = usePreset();
  return (
    <>
      <NavigationBar />
      <SidePanel
        selectedScreenSize={preferedScreenSize}
        setPreferedScreenSize={setPreferedScreenSize}
      />
      <Page key={preferedScreenSize} selectedScreenSize={preferedScreenSize} />
    </>
  );
}

export default App;
