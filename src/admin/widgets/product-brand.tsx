import { DetailWidgetProps, AdminProduct } from "@medusajs/framework/types"
import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Text, Badge } from "@medusajs/ui"
import { useEffect, useState } from "react"

const ProductBrandWidget = ({ data }: DetailWidgetProps<AdminProduct>) => {
    const [brand, setBrand] = useState<Record<string, string> | undefined>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!loading) {
            return
        }

        fetch(`/admin/products/${data.id}/brand`, {
            credentials: "include",
        })
            .then((res) => res.json())
            .then(({ brand }) => {
                setBrand(brand)
                setLoading(false)
            })
    }, [loading, data.id])

    return (
        <Container className="border rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-4 border-b">
                <Heading level="h2" className="text-xl font-semibold">Brand Information</Heading>
            </div>
            <div className="p-4">
                {loading ? (
                    <div className="flex items-center justify-center py-4">
                        <span>loading ....</span>
                    </div>
                ) : brand ? (
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <Text className=" font-medium mr-2">Name:</Text>
                            <Badge>{brand.name}</Badge>
                        </div>
                        {brand.description && (
                            <div>
                                <Text className=" font-medium">Description:</Text>
                                <Text className=" mt-1">{brand.description}</Text>
                            </div>
                        )}
                        {brand.website && (
                            <div>
                                <Text className=" font-medium">Website:</Text>
                                <a href={brand.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {brand.website}
                                </a>
                            </div>
                        )}
                    </div>
                ) : (
                    <Text className="">No brand information available.</Text>
                )}
            </div>
        </Container>
    )
}

export const config = defineWidgetConfig({
    zone: "product.details.before",
})

export default ProductBrandWidget