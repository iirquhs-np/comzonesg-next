export default function Footer() {
  return (
    <footer className={'text-white bg-zinc-800 px-3 py-5 mt-auto'}>
      <div className={'xl:max-w-7xl mx-auto justify-between'}>
        <div className={'flex flex-wrap justify-between'}>
          <div>
            <div className={'text-xl mb-6'}><strong>COM</strong>ZONE</div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <div>Singapore's #1 Customisable High Performance PC Builders.</div>
          </div>
          <div>
            <div className={'text-xl mb-6'}>NAVIGATION</div>
            <div className={'space-y-4'}>
              <div>Shop</div>
              <div>Rewards</div>
              <div>Support</div>
            </div>
          </div>
          <div className={'space-y-4'}>
            <div className={'text-xl mb-6'}>CONTACT US</div>
            <div>
              Blk 31, Ngee Ann Polytechnic <br/>
              535 Clementi Rd, Singapore 599489
            </div>
            <div>fake_contact@comzone.sg</div>

          </div>
        </div>

        <hr className={'mt-10 mb-2'}/>
        <div className={'flex justify-between items-end'}>
          <div>
            <div>© 2022 COMZONE. All Rights Reserved.</div>
            <div className={'text-xs'}>DESIGNED BY XIAO YAOJIE & SHUQRI SHAIFUDDIN</div>
          </div>
          <div>
            <div>Terms of Service | Data Protection Notice</div>
          </div>
        </div>
      </div>
    </footer>
  );
}