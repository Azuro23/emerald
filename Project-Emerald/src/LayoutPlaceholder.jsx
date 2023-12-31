import { Flex, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function LayoutPlaceholder() {
    return (
        <Flex height={'100vh'} w={'100vw'}>
            <Outlet/>
        </Flex>
    )
}