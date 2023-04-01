import { useBreakpointsContext } from "$/contexts";

import { Item } from "$/components/timeline";
import { Spacer, TextColumns } from "$/components/content";

import bookOpen from "$/svg/icons/book-open.svg";

export const AboutDesign = () => {
  const { smallish } = useBreakpointsContext();

  return (
    <Item heading="Motivation" icon={bookOpen}>
      <Spacer>
        <TextColumns columns={Number(!smallish) + 1}>
          <p>
            For a developer, a PDF resume doesn't quite cut it. I need a website
            that speaks for itself. It needs to reflect my personality, skills,
            experience, and so on. It should be mostly me: no design systems,
            bloatware, or plagiarism. Just a modest start with room to grow.
          </p>
          <p>
            I wanted to cut down on colors without compromising on usability. I
            opted for a newspaper color scheme with pale blues and inky blacks.
            The idea is less color and an analog motif would take me out of my
            comfort zone and make the page feel original. In a way, this
            portfolio page is also a challenge.
          </p>
          <p>
            I believe we overload our reliance on color to convey semantics,
            functionality, intent, hierarchy, and states. As powerful as color
            is for user experience and branding, its prevalence impedes design
            freedom and accessibility.
          </p>
          <p>
            My solution is to leverage iconography to convey application states
            and semantics. Color is restricted for focal points, where I plan to
            draw the user's attention, and as a byproduct of third-party
            iconography on the page. The desired side-effect of low color usage
            is increased curiousity about the iconography. The user will infer
            interactivity from the familiar symbols, like open in a new tab,
            link, and email, as well as static content from generic icons like
            user, book, etc.
          </p>
          <p>
            Finally, I wanted to add palatable asymmetry. Web design is too
            focused on partitioning sections with extreme precision, but we
            rarely experience such symmetry in nature. Placement, like color,
            can signal hierarchy, and positioning content emphasizes its
            relationship with the page &mdash; the overall content.
          </p>
          <p>
            That is why some elements, like cards, are offset, and the main
            section isn't exactly centered. Again, the mind picks up on the
            subtle differences and becomes more (or less) engaged. This permits
            me to sprinkle new content without having to rethink the design
            limitations later.
          </p>
          <p>
            Well, there goes the "show don't tell" rule. I also really wanted to
            use the columns property in CSS. It's really underused. Anyways,
            happy browsing.
          </p>
        </TextColumns>
      </Spacer>
    </Item>
  );
};

export default AboutDesign;
