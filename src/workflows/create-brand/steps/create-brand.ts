import { createStep, StepResponse, } from "@medusajs/framework/workflows-sdk";
import BrandModuleService from "../../../modules/brand/service";
import { BRAND_MODULE } from "../../../modules/brand";
import { CreateBrandInput } from "..";

export const createBrandStep = createStep(
    "create-brand-step",
    async (input: CreateBrandInput, { container }) => {
        const brandModuleService: BrandModuleService = container.resolve(
            BRAND_MODULE
        )

        const brand = await brandModuleService.createBrands(input)

        return new StepResponse(brand, brand.id)
    },
    async (id: string, { container }) => {
        const brandModuleService: BrandModuleService = container.resolve(
            BRAND_MODULE
        )

        await brandModuleService.deleteBrands(id)
    }

)