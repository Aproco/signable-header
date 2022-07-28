# Signable development task 1 - Website header

Here you should find two versions of the header redevelopment for review

index.html uses the mobile menu style from the existing site, whilst index-alt.html uses an inline menu layout instead. From a UI perspective it's often far better to honour the natural flow of a page so I'd tend to favour an inline menu over fixed position elements.

In the interests of readability I've separated responsive styles out at the bottom sass files rather than using any mixins.

## Additional notes

On the whole I've aimed to tighten things up and generally improve behaviour and layout, particularly responsive behaviour. I've also added some tactile feedback in places for an improved user experience.

I've intentionally omitted the vertically fluid behaviour present within the header area on the live site, in favour of retaining a more controlled height for the leading section. The thinking here is that the fluid behaviour will negatively impact the positioning of 'above the fold' content and be detrimental to the site from an SEO perspective. The current behaviour on the live site also causes content to become chopped off and illegible in certain scenarios so this prevents these issues too.

On the whole there should be reasoning behind the approaches taken during development so if you have any questions regarding approach please let me know.