import madge from 'madge';

madge('src/widgets/ArticleInfiniteList/ui/ArticleInfiniteList.tsx').then((res) => {
    console.log(res.circular());
});