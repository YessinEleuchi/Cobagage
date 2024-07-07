import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SinUpSchema = z.object({
    NomComplet: z.string().min(1, { message: "Nom complet est obligatoire." }),
    email: z.string().email({ message: "Email invalide" }),
    password: z.string()
        .min(8, { message: "Le mot de passe doit comporter au moins 8 caractères." })
        .regex(/[A-Z]/, { message: "Le mot de passe doit contenir au moins une lettre majuscule." })
        .regex(/[a-z]/, { message: "Le mot de passe doit contenir au moins une lettre minuscule." })
        .regex(/[0-9]/, { message: "Le mot de passe doit contenir au moins un chiffre." })
        .regex(/[\W_]/, { message: "Le mot de passe doit contenir au moins un caractère spécial." }),
    confirmPassword: z.string().min(1, { message: "La confirmation du mot de passe est requise." }),
    country: z.string().nonempty({ message: "Le pays est requis." }),
    phone: z.string().nonempty({ message: "Le numéro de téléphone est requis." }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas.",
    path: ["confirmPassword"], // Set the path to the field that has the issue
});

type Inputs = z.infer<typeof SinUpSchema>;
export {SinUpSchema , type Inputs };
