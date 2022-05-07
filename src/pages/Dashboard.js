import React, {useEffect} from 'react'
import HomeView from '../components/Dashboard/HomeView';
import Sidebar from '../components/Dashboard/Sidebar';
import { SplitScreen } from '../components/Layouts/SplitScreen';
import styles from './Style.module.scss';
import { useAppContext, useDispatchAppContext } from "../context_api/AppContext";
import { useMediaQuery } from 'react-responsive';


function App() {


    const isTab = useMediaQuery({
        query: '(max-width: 768px)'
    });
    
    console.log(isTab, "is mobile")

    //Use Context
    const appContext = useAppContext();
    const dispatchAppContext = useDispatchAppContext();
    const { sideBarToggle } = appContext;

    useEffect(() => {
        console.log(isTab, "fam")
        dispatchAppContext({
            type: 'SIDEBAR_TOGGLE',
            payload: isTab ? false : true
        })
    }, [isTab])
    
    

    console.log(sideBarToggle, "sidebutton");

  return (
   <div className={`3xl:container mx-auto w-full ${styles.dashboardStyle}`}>
        <SplitScreen leftVariant={`w-1/6 bg-white ${sideBarToggle ? 'block' : 'hidden'}`} rightVariant={`${styles.rightVariant} w-5/6 bg-white md:rounded-l-xl`}>
            <Sidebar />
            <HomeView />
        </SplitScreen>
   </div>
  );
}

export default App;

