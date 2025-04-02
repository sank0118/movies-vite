import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLoading from "./components/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Home = lazy(() => import("./app/page"));
const Detail = lazy(() => import("./app/[mid]/page"));

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Suspense fallback={<RootLoading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index Component={Home} />
              <Route path=":mid" Component={Detail} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
