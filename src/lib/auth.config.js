export const authConfig = {
  trustHost: true,
    pages: {
        signIn: "/",
    },
    providers: [],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token}) {
            if (token){
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({ auth, request}) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin")
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login")
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog")

            if(isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            if (isOnBlogPage && !user) {
                return false;
            }

            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl))
            }
            return true;
        }
    },
}