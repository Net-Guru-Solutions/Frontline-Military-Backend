import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Text, Button } from "@medusajs/ui"
import { Link, useParams } from "react-router-dom"

const CustomDetailPage = () => {
    const { id } = useParams()

    return (
        <Container className="border rounded-lg shadow-sm">
            <div className="flex items-center justify-between px-6 py-4 border-b">
                <Heading level="h1" className="text-2xl font-semibold">Custom Detail Page</Heading>
            </div>
            <div className="p-6 space-y-4">
                <Text className="text-gray-600">You are viewing custom item with ID: {id}</Text>
                <Link to="/custom">
                    <Button variant="secondary">Back to Custom Settings</Button>
                </Link>
            </div>
        </Container>
    )
}

export const config = defineRouteConfig({
    label: "Custom Detail",
})

export default CustomDetailPage