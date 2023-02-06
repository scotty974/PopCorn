import { optional, string, z } from "zod";

const jeuxValidation = z.object({
  Title : z.string(),
  Description : z.string(),
  Picture: z.string(),
  lien : z.string(),
  groupe_id : z.number()

});

export default jeuxValidation;