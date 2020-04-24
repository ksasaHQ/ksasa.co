<template lang="html">
  <article id="Prusa-Enclosure-Raspberry-Pi">
    <section class="full-height">
      <v-lazy-image
        :src="
          require('~/assets/images/Prusa-Enclosure-Raspberry-Pi/Illustration-Perspective.svg')
        "
        sizes="100vw"
        alt="Stylised rendering of the 3D printer's electronics assembly incorporating a Raspberry Pi mini computer."
      />
    </section>
    <section class="full-height snap">
      <div>
        <h1>
          Prusa I3 MK3S Einsy +
          <span class="nowrap">Raspberry Pi</span> Enclosure
        </h1>
        <p>
          This is a remix of
          <a href="https://www.thingiverse.com/martin_au">martin_au's</a>
          excellent
          <a href="https://www.thingiverse.com/thing:3424832"
            >embiggened, braced, reversed, Prusa Mk3 Einsy enclosure</a
          >
          to include a Raspberry Pi 2. Rather than adding another box for the
          Raspberry Pi to go in, we wanted a clean, integrated solution: So here
          it is!
        </p>
        <h2>Caveats</h2>
        <ul>
          <li>
            It should fit a Raspberry Pi 3 but we have not tested this. (If you
            do, please let us know!)
          </li>
          <li>
            Space within the enclosure is quite cramped, so connecting the wires
            to the Pi can be a bit, well, fiddly. We suggest you brew yourself a
            cup of tea before doing this. (Or
            <a
              href="https://github.com/ksasaHQ/Prusa-Enclosure-Raspberry-Pi/compare"
              >issue a pull request</a
            >
            with a higher case 😉)
          </li>
          <li>
            In our experience it is perfectly possible to power the Raspberry Pi
            from the Einsy Board, even when using the Multi Material Upgrade. If
            you are planning to power additional devices from the Pi however,
            consider adding a separate power adapter or upgrade the one that
            came with your printer.
          </li>
          <li>
            This design blocks the Pi’s power connector, so it needs to be
            powered via the 5V rail (Pins 2 and 6). Please be aware that other
            than the USB power connector, the rail does not feature a regulator
            or fuse. An incorrect voltage or current spike could fry the Pi. In
            all the time that we have used this setup, this has never been a
            problem. If you are concerned about this, be sure to add a fuse.
          </li>
        </ul>
        <p>
          Illustrations made using models by
          <a href="https://grabcad.com/library/raspberry-pi-3-board-1"
            >thingster</a
          >
          and
          <a
            href="https://grabcad.com/library/prusa-i3-mk3s-solidworks-with-step-1"
            >Jonathan Kayne</a
          >.
        </p>
      </div>
    </section>
    <section class="full-height snap">
      <v-lazy-image
        :src="
          require('~/assets/images/Prusa-Enclosure-Raspberry-Pi/Illustration-Side-View.svg')
        "
        sizes="100vw"
        alt="Side View of the elecotronics assembly. The reversed door allows for easer access."
      />
    </section>
    <section id="download" class="full-height snap">
      <a
        href="https://github.com/ksasaHQ/Prusa-Enclosure-Raspberry-Pi/tree/master/stl"
        >Download on Github</a
      >
    </section>
  </article>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      background: 'hsl(0, 0%, 98%)',
      prevBackground: null
    }
  },

  /*
  For now, each page sets and resets its background colour, as more pages use this, the functionality should probably move somerwhere else.
  */

  mounted() {
    this.prevBackground = document.querySelector('body').style.backgroundColor
    this.setBackground(this.background)
  },
  beforeDestroy() {
    this.setBackground(this.prevBackground)
  },
  methods: {
    setBackground(newBackground) {
      document.querySelector('body').style.backgroundColor = newBackground
    }
  }
}
</script>

<style lang="scss">
#Prusa-Enclosure-Raspberry-Pi {
  h1 {
    @include font-scale2;
  }
  h1,
  h2,
  li {
    @include text-body-dimensions;
  }
  section#download {
    a {
      @include font-scale2;
    }
  }
}
</style>
