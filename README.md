# **Photo Randomizer** (v2)

![](./public/photorandomizerpreview.png)

---

### *Usage*:

- On page load, photos are grabbed from the API at random. I used the URL query string 'random' to prevent image caching and repetition.
- Clicking on an image will trigger a modal to pop up, enlarging the selected photo. To close the modal, click anywhere.
- The dice button refreshes the page to get new pictures.
  


### *Issues*:

Oftentimes the same photo is displayed more than once in the set.

----

##### Photo source: [lorem picsum](picsum.photos)

##### Based on: [ui-pattern-project](github.com/professrx/ui-pattern-project)
##### **Dependencies**: react, axios
