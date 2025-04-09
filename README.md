le repo a été envoyé cependant il y a un probleme au niveau du code qui me fait un message d'erreur 

=> ERROR [frontend build 6/6] RUN npm run build                                                                                                                                                                                                                                                                                 16.2s 
------
 > [frontend build 6/6] RUN npm run build:
0.492
0.492 > client@0.1.0 build
0.492 > next build
0.492
1.240 Attention: Next.js now collects completely anonymous telemetry regarding usage.
1.240 This information is used to shape Next.js' roadmap and prioritize features.
1.240 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
1.240 https://nextjs.org/telemetry
1.240
1.293    ▲ Next.js 15.2.1
1.293
1.357    Creating an optimized production build ...
13.22  ✓ Compiled successfully
13.23    Skipping linting
13.23    Checking validity of types ...
16.12 Failed to compile.
16.12
16.12 src/app/profile/[username]/page.tsx
16.12 Type error: Type 'Props' does not satisfy the constraint 'PageProps'.
16.12   Types of property 'params' are incompatible.
16.12     Type '{ username: string; }' is missing the following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]
16.12
16.14 Next.js build worker exited with code: 1 and signal: null
------
failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1


encore de reglage ... c'est un projet qu'on ma passé comme je n'avais plus de proj sur un changement de poste
