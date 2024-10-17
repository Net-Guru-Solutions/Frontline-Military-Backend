import { MedusaNextFunction, MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { defineMiddlewares } from "@medusajs/medusa"
import { z } from "zod"

export default defineMiddlewares({
    routes: [
        {
            matcher: "/admin/products",
            method: ["POST"],
            additionalDataValidator: {
                brand_id: z.string().optional(),
            },
        },
        {
            matcher: "/custom*",
            middlewares: [
                (
                    req: MedusaRequest,
                    res: MedusaResponse,
                    next: MedusaNextFunction
                ) => {
                    console.log("Received a request!")

                    next()
                },
            ],
        },

    ],
})