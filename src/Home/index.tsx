export const Home = (): JSX.Element => {
    return (
        <main class="font-sans antialiased text-gray-900 leading-normal tracking-wider">
            <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto">
                ${photo('https://drive.google.com/uc?id=16o3IBFWACQ8SkVc6LuwMJyXabJqeFA7h')}
                <div id="profile" class="w-full rounded-lg shadow-2xl bg-white opacity-75">
                    <div class="p-4 md:p-12 text-center lg:text-left">
                        <h1 class="text-3xl font-bold pt-8 lg:pt-0">Tim Remnant</h1>
                        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
                        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                            ${briefcase()}
                            Software Developer
                        </p>
                        <p class="pt-8 text-sm">Currently working with Dart and Flutter</p>
                        <p class="pt-8 text-sm"><a class="blog-trigger cursor-pointer">Blog</a></p>
                        <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                            ${github("https://github.com/pigilwin")}
                            ${instagram("https://www.instagram.com/timremnant")}
                            ${linkedin("https://www.linkedin.com/in/tim-remnant-420094106/")}
                        </div>
                    </div>
                </div>
                ${theme()}
            </div>
        </main>
    );
}