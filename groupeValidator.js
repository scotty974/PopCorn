import { optional, string, z } from "zod";

const groupeValidation = z.object({
  name : z.string(),
  logo : z.string(),
  
});

export default groupeValidation;