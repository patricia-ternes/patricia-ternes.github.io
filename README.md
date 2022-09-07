# Patricia Ternes' Homepage

This is my personal Homepage.

## Credits

This site is built using [GitHub pages](https://pages.github.com/) and
[Jekyll](https://jekyllrb.com) and is based on the [*Feeling Responsive*][1]
theme.

## Development

The main content of this website is organized in data yaml files (`.yml`) at `_data/`
directory, and markdown files (`.md`) at `pages/` directory.

When new content is added in the `main` branch, a *GitHub action*
(`.github/workflows/merge-schedule.yml`) is automatically executed. This action
converts all the content into an `html` website and stores it in the `gh-pages`
branch (**warning: do not make any manual changes to this branch**).

### Links

To add internal links into markdown files use the following structure:

```markdown
{{ site.url }}{{ site.baseurl }}/path/to/folder/or/file
```


## Local Development: Anaconda environment

*Note:* *This step is not mandatory!*

Before pushing any changes to GitHub, check that the site will be built as
expected. For this it is possible to build the site locally.
You will need to have `Ruby`, `Bundler` and `Jekyll` installed.

I had problems configuring these elements, and the alternative I list below was
the one I found to be the simplest and most consistent across different machines.

First clone this project:

```bash
git clone https://github.com/patricia-ternes/patricia-ternes.github.io.git
```

Then install Ruby, required compilers and dependencies using
[Anaconda](https://www.anaconda.com/).

```bash
conda env create -f environment.yml
```

Activate the environment:

```bash
conda activate personal-gh-page
```

Now, you can install `Jekyll` and `Bundler`

```bash
(personal-gh-page) $ gem install jekyll bundler
```

Finally, update the dependencies for the Jekyll site (dependences are listed
in the `gemfile`)

```bash
(personal-gh-page) $ bundle update
```

### Local Render

You can now build the site locally and render it to view the contents:

```bash
(personal-gh-page) $ bundle exec jekyll serve
```

### "Ruby not found" troubleshooting

For some reason unknown to me, `conda` stopped finding Ruby after deactivate/activate the environment.
<!-- This issue was not consistent across the platforms I tested. -->

For me the error was:

```bash
~/anaconda3/envs/personal-gh-page/share/rubygems/bin/ruby: No such file or directory
```

I solved this problem by creating a link between the directory that ruby was
with the directory that `conda` expected ruby to be.

To find the `ruby`, run the command:

```bash
(personal-gh-page) $ which ruby
~/anaconda3/envs/personal-gh-page/bin/ruby
```

Then create a link using `ln -s real_path expected_path`, in my case:

```bash
ln -s ~/anaconda3/envs/personal-gh-page/bin/ruby ~/anaconda3/envs/personal-gh-page/share/rubygems/bin/ruby
```

[1]: http://phlow.github.io/feeling-responsive/