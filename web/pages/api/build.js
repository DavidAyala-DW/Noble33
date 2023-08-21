/**
 * This route is called whenver there are updates in Sanity and triggers
 * builds in Netlify for the necessary Noble sites.
 */

const buildHooks = {
  noble: 'https://api.netlify.com/build_hooks/6377d5c9dd2ac320658f29eb',
  casaMadera: 'https://api.netlify.com/build_hooks/6377d5eaea257027c51539ec',
  tocaMadera: 'https://api.netlify.com/build_hooks/64adeb12f993f55779120527',
  sparrow: 'https://api.netlify.com/build_hooks/6452ea312dfff80f46d0d683',
  meduza: 'https://api.netlify.com/build_hooks/64e3c0ff350b1d008d7723e6',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Unsupported method' });
  }

  const changedDocType = req.body._type;
  console.log('doc type:', changedDocType);

  // Try to determine which site's content was updated by comparing the
  // document type. If we find a match, we can rebuild just that site.
  const matchedHook = Object.entries(buildHooks).find(([id]) =>
    changedDocType.toLowerCase().includes(id.toLowerCase())
  );
  console.log('matched hook:', matchedHook);

  const hooksToTrigger = matchedHook
    ? [matchedHook[1]]
    : Object.values(buildHooks);
  console.log('hooks to trigger:', hooksToTrigger);

  const requests = hooksToTrigger.map((url) => fetch(url, { method: 'POST' }));

  Promise.all(requests);
}
