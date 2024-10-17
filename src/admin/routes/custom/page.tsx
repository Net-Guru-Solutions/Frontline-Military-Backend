import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Button } from "@medusajs/ui"
import { Link } from "react-router-dom"

const CustomSettingPage = () => {
    return (
        <Container className=" border rounded-lg shadow-sm">
            <div className="flex items-center justify-between px-6 py-4 border-b">
                <Heading level="h1" className="text-2xl font-semibold">Custom Setting Page</Heading>
            </div>
            <div className="p-6">
                <Link to="/custom/123">
                    <Button variant="primary">Go to Custom 123</Button>
                </Link>
            </div>
        </Container>
    )
}

export const config = defineRouteConfig({
    label: "Custom",
})

export default CustomSettingPage