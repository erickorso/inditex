'use client'
import Search from "@/components/Search";
import Maintemplate from "@/components/Templates/MainTemplate";
import XModal from "@/components/XModal";
import ReduxProvider from "@/lib/providers/ReduxProvider";

const TestPage = () => {
    return (
        <ReduxProvider>
            <Maintemplate>
                <Search />
                <XModal />
            </Maintemplate>
        </ReduxProvider>
    );
}

export default TestPage