import { optional, string, z } from "zod";

const jeuxValidation = z.object({
  Title : z.string(),
  Description : z.string(),
  Picture: z.string(),
  Worker : z.string()

});

export default jeuxValidation;