import PortfolioImg from '@/public/images/portfolio-img.jpg';
import Portfolio1Img from '@/public/images/portfolio/kerim1.png';
import Portfolio2Img from '@/public/images/portfolio/kerim2.png';
import Portfolio3Img from '@/public/images/portfolio/kerim3.png';
import Portfolio4Img from '@/public/images/portfolio/kerim4.png';
import Portfolio5Img from '@/public/images/portfolio/kerim5.png';
import Portfolio6Img from '@/public/images/portfolio/kerim6.png';
import Portfolio7Img from '@/public/images/portfolio/kerim7.png';

import MainImage from '@/public/images/blog-img-wide.jpg';

export const portfolioData = {
    mainData: {
        title: "Portfolyo",
        title2: "",
        title2Span: "Çalışmalar",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    projects: [

        {
            title: 'Bina Site Tasarım',
            slug: 'first',
            description: '',
            services: [
                { name: '3D Modelleme' },
                { name: 'Render' },
            ],
            program: 'Blender',
            projectLink: {
                title: 'Kerim Kaçar',
                url: 'http://kerimkacar.vercel.app'
            },
            duration: '3 Gün',
            content: 'İçerik hakkında yazı',
            mainImage: Portfolio2Img,
            mainImageWide: Portfolio2Img,
            images: [
                { image: Portfolio1Img },
                { image: Portfolio3Img },
            ],
            categories: [
                { name: '3D Modelleme' },
                { name: 'Shader' },
            ],
        },


        {
            title: 'Hastane',
            slug: 'second',
            description: '',
            services: [
                { name: '3D Modelleme' },
                { name: 'Render' },
            ],
            program: 'Blender',
            projectLink: {
                title: 'Kerim Kaçar',
                url: 'http://kerimkacar.vercel.app'
            },
            duration: '6 gün',
            content: 'İçerik hakkında yazı',
            mainImage: Portfolio5Img,
            mainImageWide: Portfolio5Img,
            images: [
                { image: Portfolio4Img },
            ],
            categories: [
                { name: '3D Modelleme' },
                { name: 'Korku' },
                { name: 'Işıklandırma' },
            ],
        },


        {
            title: 'Rolls-Royce',
            slug: 'third',
            description: '',
            services: [
                { name: '3D Modelleme' },
                { name: 'Render' },
            ],
            program: 'Blender',
            projectLink: {
                title: 'Kerim Kaçar',
                url: 'http://kerimkacar.vercel.app'
            },
            duration: '2 Gün',
            content: 'İçerik hakkında yazı',
            mainImage: Portfolio7Img,
            mainImageWide: Portfolio7Img,
            images: [
                { image: Portfolio6Img },
                { image: Portfolio6Img },
            ],
            categories: [
                { name: '3D Modelleme' },
                { name: 'Shader' },
                { name: 'Işıklandırma' },
            ],
        },

  
    ]
};