# Dream Plus Theme for Hugo

![Dream Plus Theme](https://github.com/UtkarshVerma/hugo-dream-plus/blob/master/images/original.png)
This theme is an upgraded version of the [Dream Theme](https://github.com/g1eny0ung/hugo-theme-dream) by [Yue Yang](https://github.com/g1eny0ung), this version has alot of experimental modifications to improve performance.

#### [Live Demo](https://blog.atlantishq.de)
### The config file
Within the [`exampleSite`](/exampleSite) folder, you'll find the [`config.toml`](/exampleSite/config.toml) file which can be used to tweak the theme.

### Describe yourself
Define yourself through the following variables:
```
author = "<name of the author>"
description = "Short description of the site"
motto = "author's motto or short description"
avatar = "<absolute path to avatar>"	//Leaving the avatar variable unset displays svg avatars
```

After that, fill up the social variables at the end of the config file. This theme suports the following social sites: (The examples are given)

* GitHub    - `github = "<username>"`
* Email     - `email = "<email id>"`
* Twitter   - `twitter = "<username>"`
* Facebook  - `facebook = "<username>"`
* YouTube   - `youtube = "<username>"`
* Medium    - `medium = "<username>"`
* LinkedIn  - `linkedin = "<username>"`
* StackOverflow - `stackoverflow = "<username with the user number>"`
* CodePen   - `codepen = "<username>"`
* Reddit    - `reddit = "<username>"`

### Toggling the views
As stated earlier, this theme has two views, **Card view** and **Post view**. To define your desired view, modify the `contentType` variable as follows:
```toml
contentType = "cards"    # Enables the card view.   
contentType = "post"     # Enables the post view.
```

One clear distinction between both the view is that **Card** view doesn't support posts, instead it redirects to the specified link, while **Post** view does.
You may test them out yourselves by visiting my sites(stated above) which use them.
Also, post/card creation is done differently for both the views. It is as follows:
```shell
hugo new cards/example.md		//Card creation
hugo new post/example.md		//Post creation
```

After this, just open your MarkDown card/post and provide the parameters for the card/post.

### Image background
To enable setting images as background, you'll have to disable **random colour background** first by setting `enableColorBG` to false.
Also, enabling image background feature requires the modification of two variables, namely `bgImage` and `bgList`. If you prefer a single image background, then simply set the value of `bgImage` as the absolute path of your image. For example,
```
bgImage = "/images/bg1.jpeg"
```
You can also enable random background feature which switches the background between a provided images list(stored in `bgList`), every time the site is reloaded. For example,
```
bgList = ["/images/bg1.jpeg", "/images/bg2.jpeg", "/images/bg3.jpeg"]
```
You may also add blurring effect to the background image using `bgBlur`.

### Error page and about page
This theme supports total customization of **about** and **error** pages. These pages may be customized through the [`about.md`](/exampleSite/content/about.md) and [`404.md`](/exampleSite/content/404.md) files. Once finished customizing, copy them in the `/content` directory of your Hugo site.

### Custom favicon
You may also set a custom favicon for your website using the `favicon` config variable. For example,
```
  favicon = "/images/defaultFav.ico"
```

### Some other configurations
There are some other minor configurations as well. You may set them up by referring to the comments inside the config file.

## License 
This theme is released under the [**MIT**](/LICENSE.MD) license.
