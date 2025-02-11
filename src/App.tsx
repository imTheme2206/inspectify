import { NavigationBar } from './components/navigation-bar';
import { SidePanel } from './components/side-panel';
import { PresetProvider } from './provider/use-preset';
import { Page } from './page';
import { IFrameProvider } from './provider/iframe';

function App() {
  return (
    <PresetProvider>
      <div className="w-screen h-screen flex flex-col">
        <NavigationBar />
        <div className="flex grow gap-x-4 w-full overflow-scroll bg-secondary-400">
          <IFrameProvider>
            <SidePanel />
            <Page />
          </IFrameProvider>
        </div>
      </div>
    </PresetProvider>
  );
}

export default App;
