import { optional, string, z } from "zod";

const jeuxValidation = z.object({
  id : z.number().optional(),
  Title : z.string(),
  Description : z.string(),
  Picture: z.string(),
  lien : z.string(),
  groupe_id : z.number()

});

export default jeuxValidation;