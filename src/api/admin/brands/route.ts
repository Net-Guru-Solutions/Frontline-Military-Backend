import BrandModuleService from "src/modules/brand/service";
import { CreateBrandInput, createBrandWorkflow } from "../../../workflows/create-brand";
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { BRAND_MODULE } from "src/modules/brand";

export const POST = async (req: MedusaRequest<CreateBrandInput>, res: MedusaResponse) => {
    try {
        const { result } = await createBrandWorkflow(req.scope).run({
            input: req.body,
        });
        res.json({ brand: result });
    } catch (error) {
        res.status(500).json({ message: "Failed to create brand", error: error.message });
    }
};

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    try {
        console.log('hit step one ')
        const brandModuleService: BrandModuleService = req.scope.resolve(BRAND_MODULE);
        console.log('hit step two ')
        const limit = req.query.limit || 15;
        const offset = req.query.offset || 0;
        console.log('hit step three ')
        const [brands, count] = await brandModuleService.listAndCountBrands({}, {
            skip: offset as number,
            take: limit as number,
        });
        console.log('hit step four ')
        res.json({
            brands,
            count,
            limit,
            offset,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch brands", error: error.message });
    }
};