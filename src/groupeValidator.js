import { z } from "zod";

const groupeValidation = z.object({
  id: z.number().optional(),
  name: z.string(),
  logo: z.string(),

});

export default groupeValidation;