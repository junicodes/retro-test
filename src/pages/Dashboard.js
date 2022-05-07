import HomeView from '../components/Dashboard/HomeView';
import Sidebar from '../components/Dashboard/Sidebar';
import { SplitScreen } from '../components/Layouts/SplitScreen';
import styles from './Style.module.scss';

function App() {
  return (
   <div className={`3xl:container mx-auto w-full ${styles.dashboardStyle}`}>
        <SplitScreen leftVariant={'w-1/6 bg-white'} rightVariant={`${styles.rightVariant} w-5/6 bg-white rounded-l-xl`}>
            <Sidebar />
            <HomeView />
        </SplitScreen>
   </div>
  );
}

export default App;

