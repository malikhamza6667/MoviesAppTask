
import AppRoutes from "@routes";

import { ThemeProvider } from "@contexts";

const App=()=>{

  return(
    <ThemeProvider>
     <AppRoutes/>
    </ThemeProvider>
   

    
  )
}

export default App;